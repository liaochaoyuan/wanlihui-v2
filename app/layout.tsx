import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZepaiAI - AI智能绘图生成平台",
  description: "在线AI绘画、图像生成、创意设计SaaS会员服务",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {/* 顶部导航栏 */}
        <header style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#000", textDecoration: "none" }}>ZepaiAI 万里汇AI绘图</a>
            <nav style={{ display: "flex", gap: "30px" }}>
              <a href="/" style={{ color: "#333", textDecoration: "none" }}>首页</a>
              <a href="/privacy" style={{ color: "#333", textDecoration: "none" }}>隐私政策</a>
              <a href="/terms" style={{ color: "#333", textDecoration: "none" }}>服务条款</a>
              <a href="/refund" style={{ color: "#333", textDecoration: "none" }}>退款规则</a>
            </nav>
          </div>
        </header>

        {/* 页面主体内容 */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px" }}>
          {children}
        </div>

        {/* 底部审核必备信息 */}
        <footer style={{ marginTop: "80px", padding: "40px", background: "#f7f7f7" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ margin: "0 0 10px" }}>运营主体</h3>
              <p>江门市蓬江区多多助手信息咨询服务（个体工商户）</p>
              <p>邮箱：275480177@qq.com</p>
              <p>网站域名：https://zepaiai.com</p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="/privacy">隐私政策</a>
              <a href="/terms">服务条款</a>
              <a href="/refund">退款政策</a>
            </div>
            <p style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>© 2026 ZepaiAI All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}