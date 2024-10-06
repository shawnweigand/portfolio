# kubectl command to create the secret
$command="kubectl create secret generic portfolio-secret"

# get initial secrets from HashiCorp Vault
$secrets=hcp vault-secrets secrets list --format=json | ConvertFrom-Json

# loop through secrets
foreach ($secret in $secrets) {
    # extract key
    $key=$secret.name
    # extract value
    $password=(hcp vault-secrets secrets open $key --format=json | ConvertFrom-Json).static_version.value
    # add key-value to kubectl command
    $command+=" --from-literal=$key=$password"
}

# convert kubectl command to apply for updating
$command+=" --dry-run=client -o yaml | kubectl apply -f -"

# run command
Invoke-Expression $command
