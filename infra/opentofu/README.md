# OpenTofu GitHub Pages And Cloudflare

This OpenTofu project manages:

- the GitHub repository
- GitHub Pages in workflow build mode
- the GitHub Pages custom domain
- Cloudflare DNS for either a subdomain or apex domain

The target GitHub repository is `jumpei0915/website_my_portfolio`, so the example variables use that repository by default.

## Credentials

Do not commit credentials. Use environment variables:

```sh
export GITHUB_TOKEN="..."
export CLOUDFLARE_API_TOKEN="..."
```

The GitHub token needs repository administration access. The Cloudflare token needs zone read and DNS edit access for the target zone.

## Configure

```sh
cd infra/opentofu
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars`:

- `cloudflare_zone_name`: apex zone in Cloudflare, for example `example.com`
- `pages_custom_domain`: full domain for the site, for example `blog.example.com`
- `cloudflare_zone_id`: optional if you already know it

## Optional Imports

If the Cloudflare DNS record already exists, import it before applying changes:

```sh
cp imports.tf.example imports.tf
```

Then keep only the relevant Cloudflare import block in `imports.tf`:

- keep `cloudflare_dns_record.pages_subdomain[0]` for a subdomain CNAME
- keep the `pages_apex_a` and `pages_apex_aaaa` imports only for an apex domain
- replace every placeholder ID with the real Cloudflare `<zone_id>/<dns_record_id>`

Run:

```sh
tofu init
tofu plan
tofu apply
```

After the first successful import/apply, `imports.tf` can stay as a record of the import or be removed.

## DNS Shape

For a subdomain like `blog.example.com`, OpenTofu creates one Cloudflare `CNAME` record pointing to `jumpei0915.github.io`.

For an apex domain like `example.com`, OpenTofu creates four `A` records and four `AAAA` records using GitHub Pages' published IP addresses.

Cloudflare proxying is set to `false` so GitHub Pages can validate and issue HTTPS normally.
