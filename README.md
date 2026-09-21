# Sample Azure Static Web Apps Project

Dự án mẫu minh họa đầy đủ các tính năng của **Azure Static Web Apps**:
1. **Mock Authentication**: Đăng nhập qua Microsoft Entra, GitHub với giả lập của SWA CLI.
2. **Role-Based Access Control**: Cấu hình bảo vệ trang `/admin.html` chỉ cho phép role `admin` truy cập.
3. **Internal Auth Endpoint**: Gọi `/.auth/me` để lấy thông tin người dùng và danh sách roles.
4. **SWA Config**: File `swa-cli.config.json` và `public/staticwebapp.config.json`.

## Cách chạy

```powershell
cd sample-swa-app
swa start
```

Sau đó mở trình duyệt tại: `http://localhost:4280`
