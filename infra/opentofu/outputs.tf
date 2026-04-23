output "github_repository_full_name" {
  description = "GitHub repository managed by this OpenTofu project."
  value       = github_repository.site.full_name
}

output "pages_custom_domain" {
  description = "Custom domain configured for GitHub Pages."
  value       = var.pages_custom_domain
}

output "pages_url" {
  description = "Expected HTTPS URL for the site."
  value       = "https://${var.pages_custom_domain}"
}

output "cloudflare_zone_id" {
  description = "Cloudflare zone used for DNS records."
  value       = local.cloudflare_zone_id
}
