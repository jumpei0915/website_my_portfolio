data "cloudflare_zone" "site" {
  count = var.cloudflare_zone_id == null ? 1 : 0

  filter = {
    name = var.cloudflare_zone_name
  }
}

locals {
  cloudflare_zone_id          = var.cloudflare_zone_id != null ? var.cloudflare_zone_id : data.cloudflare_zone.site[0].id
  github_pages_default_domain = "${var.github_owner}.github.io"
  is_apex_domain              = var.pages_custom_domain == var.cloudflare_zone_name

  github_pages_ipv4 = toset([
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
  ])

  github_pages_ipv6 = toset([
    "2606:50c0:8000::153",
    "2606:50c0:8001::153",
    "2606:50c0:8002::153",
    "2606:50c0:8003::153",
  ])
}

resource "github_repository" "site" {
  name         = var.github_repository
  description  = var.repository_description
  visibility   = var.github_repository_visibility
  homepage_url = "https://${var.pages_custom_domain}"

  pages {
    build_type = "workflow"
    cname      = var.pages_custom_domain
  }
}

resource "cloudflare_dns_record" "pages_subdomain" {
  count = local.is_apex_domain ? 0 : 1

  zone_id = local.cloudflare_zone_id
  name    = var.pages_custom_domain
  type    = "CNAME"
  content = local.github_pages_default_domain
  ttl     = 1
  proxied = false
  comment = "GitHub Pages custom domain for ${var.github_owner}/${var.github_repository}"
}

resource "cloudflare_dns_record" "pages_apex_a" {
  for_each = local.is_apex_domain ? local.github_pages_ipv4 : toset([])

  zone_id = local.cloudflare_zone_id
  name    = var.pages_custom_domain
  type    = "A"
  content = each.value
  ttl     = 1
  proxied = false
  comment = "GitHub Pages apex IPv4 record for ${var.github_owner}/${var.github_repository}"
}

resource "cloudflare_dns_record" "pages_apex_aaaa" {
  for_each = local.is_apex_domain ? local.github_pages_ipv6 : toset([])

  zone_id = local.cloudflare_zone_id
  name    = var.pages_custom_domain
  type    = "AAAA"
  content = each.value
  ttl     = 1
  proxied = false
  comment = "GitHub Pages apex IPv6 record for ${var.github_owner}/${var.github_repository}"
}
