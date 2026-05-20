### Laravel Sail & Vite Permission Fix

```bash
# 1. Fix node_modules permissions
sail root-shell -c "chown -R sail:sail /var/www/html/node_modules"

# 2. Fix public directory permissions (resolves public/hot)
sail root-shell -c "chown -R sail:sail /var/www/html"

# 3. Start dev server
sail npm run dev

# 4. give access to the user
sudo chown -R $USER:$USER .
