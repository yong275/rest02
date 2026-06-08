import './Services.css'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    id: 'computer',
    icon: '🖥️',
    title: '컴퓨터 판매',
    color: 'blue',
    desc: '데스크탑, 노트북, 서버, 네트워크 장비 등 다양한 IT 기기를 공식 유통 채널을 통해 합리적인 가격에 공급합니다.',
    features: ['데스크탑 / 노트북 / 태블릿', '서버 및 네트워크 장비', '주변기기 & 소모품', '기업 대량 구매 할인', '무상 A/S 지원'],
  },
  {
    id: 'program',
    icon: '⚙️',
    title: '프로그램 개발',
    color: 'green',
    desc: 'ERP, CRM, 재고관리, 업무 자동화 등 기업의 업무 효율을 높이는 맞춤형 소프트웨어를 개발합니다.',
    features: ['ERP / CRM 솔루션', '업무 자동화 시스템', '데이터베이스 설계', '레거시 시스템 현대화', '유지보수 및 업그레이드'],
  },
  {
    id: 'web',
    icon: '🌐',
    title: '웹 개발',
    color: 'red',
    desc: '기업 홈페이지부터 쇼핑몰, 웹 애플리케이션까지 최신 기술 스택으로 퍼포먼스 높은 웹사이트를 구축합니다.',
    features: ['기업 홈페이지 / 랜딩페이지', '쇼핑몰 / 이커머스', '반응형 웹 디자인', '웹 애플리케이션 개발', 'SEO 최적화'],
  },
  {
    id: 'support',
    icon: '🔧',
    title: 'IT 유지보수',
    color: 'blue',
    desc: '네트워크 인프라 구축, PC 관리, 서버 운영 등 기업의 IT 환경을 안정적으로 유지하고 관리합니다.',
    features: ['네트워크 설계 & 구축', '서버 운영 & 모니터링', 'PC 환경 관리', '원격 기술 지원', '정기 점검 서비스'],
  },
]

export default function Services() {
  return (
    <main className="services-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <p className="section-tag">SERVICES</p>
          <h1 className="section-title">서비스</h1>
          <p className="page-header-desc">
            컴퓨터 판매부터 소프트웨어 개발까지, 기업 IT의 모든 것을 책임집니다
          </p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          {SERVICES.map(({ id, icon, title, color, desc, features }) => (
            <div key={id} id={id} className={`service-detail-card border-${color}`}>
              <div className="service-detail-left">
                <div className={`service-detail-icon icon-${color}`}>{icon}</div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                  이 서비스 문의하기
                </Link>
              </div>
              <div className="service-detail-right">
                <h4>주요 항목</h4>
                <ul className="feature-list">
                  {features.map((f) => (
                    <li key={f}>
                      <span className={`feature-check check-${color}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <p className="section-tag">PROCESS</p>
          <h2 className="section-title">진행 프로세스</h2>
          <p className="section-subtitle">체계적인 프로세스로 프로젝트를 진행합니다</p>
          <div className="process-steps">
            {['상담 & 요건 분석', '제안 & 견적', '계약 & 착수', '개발 & 납품', '유지보수'].map((step, i) => (
              <div key={step} className="process-step">
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="step-label">{step}</div>
                {i < 4 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
