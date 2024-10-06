$command="kubectl create secret generic portfolio-secret"
$secrets=hcp vault-secrets secrets list --format=json | ConvertFrom-Json

Foreach ($secret in $secrets) {
    $key=$secret.name
    $password=(hcp vault-secrets secrets open $key --format=json | ConvertFrom-Json).static_version.value
    $command+=" --from-literal=$key=$password"
}

Invoke-Expression $command
