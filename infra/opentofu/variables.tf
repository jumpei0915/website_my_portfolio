variable "github_owner" {
  description = "GitHub user or organization that owns the repository."
  type        = string
  default     = "jumpei0915"
}

variable "github_repository" {
  description = "GitHub repository name for this site."
  type        = string
  default     = "website_my_portfolio"
}

variable "github_repository_visibility" {
  description = "Repository visibility."
  type        = string
  default     = "public"
}

variable "repository_description" {
  description = "Description shown on the GitHub repository."
  type        = string
  default     = "Portfolio and blog site for Jumpei Kato."
}

variable "cloudflare_zone_name" {
  description = "Cloudflare zone name, for example example.com."
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Optional Cloudflare zone ID. If omitted, OpenTofu looks up the zone by cloudflare_zone_name."
  type        = string
  default     = null
}

variable "pages_custom_domain" {
  description = "Full custom domain for GitHub Pages, for example blog.example.com or example.com."
  type        = string
}
