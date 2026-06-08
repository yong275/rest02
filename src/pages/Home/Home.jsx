import './Home.css'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: 'fa-solid fa-desktop',
    title: '컴퓨터 판매',
    desc: '데스크탑, 노트북, 서버 등 다양한 IT 장비를 합리적인 가격에 공급합니다.',
    color: 'blue',
  },
  {
    icon: 'fa-solid fa-code',
    title: '프로그램 개발',
    desc: 'ERP, CRM, 업무 자동화 솔루션 등 기업 맞춤형 소프트웨어를 개발합니다.',
    color: 'green',
  },
  {
    icon: 'fa-solid fa-globe',
    title: '웹 개발',
    desc: '기업 홈페이지, 쇼핑몰, 웹 애플리케이션을 최신 기술로 구축합니다.',
    color: 'red',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'IT 유지보수',
    desc: '네트워크, 서버, PC 등 IT 인프라의 안정적인 운영을 지원합니다.',
    color: 'blue',
  },
]

const STATS = [
  { value: '20+', label: '년 이상의 경험' },
  { value: '500+', label: '고객사' },
  { value: '1,000+', label: '완료 프로젝트' },
  { value: '24/7', label: '기술 지원' },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-badge">Since 2003. 20년의 신뢰</div>
          <h1 className="hero-title">
            IT 전문 기업<br />
            <span className="hero-highlight">YJ IT Solutions</span>
          </h1>
          <p className="hero-desc">
            컴퓨터 판매부터 프로그램 개발, 웹 개발까지<br />
            기업의 IT 환경을 책임지는 전문 파트너입니다.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">서비스 보기</Link>
            <Link to="/contact" className="btn-outline">문의하기</Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span />
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <p className="section-tag">WHAT WE DO</p>
          <h2 className="section-title">핵심 서비스</h2>
          <p className="section-subtitle">20년 이상의 경험으로 최고의 IT 서비스를 제공합니다</p>
          <div className="services-grid">
            {SERVICES.map(({ icon, title, desc, color }) => (
              <div key={title} className={`service-card card-${color}`}>
                <div className={`service-icon icon-${color}`}>
                  <i className={icon}></i>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-more">
                  자세히 보기 <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-section">
        <div className="container why-inner">
          <div className="why-text">
            <p className="section-tag">WHY US</p>
            <h2 className="section-title">왜 YJ IT Solutions인가?</h2>
            <ul className="why-list">
              <li>
                <span className="why-icon green">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <strong>20년 이상의 전문 노하우</strong>
                  <p>2003년 창업 이후 축적된 풍부한 경험과 기술력</p>
                </div>
              </li>
              <li>
                <span className="why-icon blue">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <strong>원스톱 IT 서비스</strong>
                  <p>하드웨어 구매부터 소프트웨어 개발, 유지보수까지 한 곳에서</p>
                </div>
              </li>
              <li>
                <span className="why-icon red">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>
                  <strong>고객 맞춤형 솔루션</strong>
                  <p>기업의 규모와 요구사항에 맞는 최적화된 솔루션 제공</p>
                </div>
              </li>
            </ul>
            <Link to="/about" className="btn-primary" style={{ marginTop: '2rem' }}>
              회사 소개 보기
            </Link>
          </div>
          <div className="why-visual">
            <div className="visual-box">
              <div className="visual-year">2003</div>
              <div className="visual-label">창업</div>
              <div className="visual-divider" />
              <div className="visual-year accent">{new Date().getFullYear()}</div>
              <div className="visual-label">현재</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>프로젝트를 시작할 준비가 되셨나요?</h2>
          <p>전문 상담사가 최적의 솔루션을 안내해 드립니다.</p>
          <Link to="/contact" className="btn-primary">무료 상담 신청</Link>
        </div>
      </section>
    </main>
  )
}
