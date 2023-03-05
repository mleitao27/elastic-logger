# elastic-logger
## Development in WSL
When developing in WSL you may need to run the following commands in the windows powershell before starting:
```
wsl -d docker-desktop
```
```
sysctl -w vm.max_map_count=262144
```