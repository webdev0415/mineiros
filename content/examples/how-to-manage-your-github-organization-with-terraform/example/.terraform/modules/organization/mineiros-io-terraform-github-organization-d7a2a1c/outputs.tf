output "blocked_users" {
  description = "A list of users that are blocked by the organiation."
  value       = github_organization_block.blocked_user
}

output "memberships" {
  description = "A map of members and admins keyed by username."
  value       = github_membership.membership
}

output "projects" {
  description = "A map of projects keyed by the id (default: project name)."
  value       = github_organization_project.project
}
