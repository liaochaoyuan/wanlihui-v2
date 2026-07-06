export default function HomePage() {
  return (
    <div>
      <h1 style={{ fontSize: "42px" }}>万里汇首页 | ZepaiAI AI智能绘图平台</h1>
      <p style={{ fontSize: "18px", color: "#555", maxWidth: "800px" }}>
        ZepaiAI 是线上AI图像生成SaaS服务平台，提供AI绘画、创意图片生成、素材编辑等数字化服务，支持免费试用与付费会员算力套餐，面向个人创意创作者提供AI绘图算力。
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2>会员付费套餐</h2>
        <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
          <div style={{ border: "1px solid #eee", padding: "24px", borderRadius: "12px", flex: 1 }}>
            <h3>基础试用套餐</h3>
            <p>免费每日基础绘图额度</p>
            <p>适合新手体验AI绘图功能</p>
          </div>
          <div style={{ border: "1px solid #eee", padding: "24px", borderRadius: "12px", flex: 1 }}>
            <h3>月度会员套餐</h3>
            <p>付费解锁高清大图、无水印、大额绘图算力</p>
            <p>按月自动续期，随时可取消订阅</p>
          </div>
          <div style={{ border: "1px solid #eee", padding: "24px", borderRadius: "12px", flex: 1 }}>
            <h3>年度会员套餐</h3>
            <p>全年不限基础算力，商业可授权出图</p>
            <p>性价比最高商用方案</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>平台服务说明</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>在线AI文生图、图生图、图片扩图、风格转换</li>
          <li>生成作品版权归使用用户本人所有，可个人商用</li>
          <li>平台严格过滤暴力、色情、侵权、政治敏感内容</li>
          <li>充值为虚拟算力服务，支持72小时未使用全额退款</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>联系我们</h2>
        <p>业务咨询、退款申诉、账号问题请发送邮件至客服邮箱</p>
        <p>邮箱：275480177@qq.com</p>
      </section>
    </div>
  );
}