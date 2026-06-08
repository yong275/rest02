import './About.css'

const HISTORY = [
  { year: '2003', event: '9월 23일 YJ IT 창업 — 컴퓨터 판매 & 수리 서비스 시작' },
  { year: '2005', event: '프로그램 개발 사업부 신설, 첫 ERP 솔루션 납품' },
  { year: '2008', event: '웹 개발 서비스 런칭, 기업 홈페이지 구축 사업 확장' },
  { year: '2012', event: '기업 고객 100사 돌파, 사무실 확장 이전' },
  { year: '2016', event: '클라우드 솔루션 서비스 도입' },
  { year: '2020', event: '비대면 IT 지원 서비스 강화, 원격 유지보수 시스템 구축' },
  { year: '2023', event: '창업 20주년, 누적 고객사 500사 돌파' },
]

const TEAM_VALUES = [
  { icon: '🎯', title: '전문성', desc: '20년 현장 경험에서 나오는 깊은 기술력과 노하우' },
  { icon: '🤝', title: '신뢰', desc: '고객과의 약속을 지키는 장기적 파트너십 추구' },
  { icon: '🚀', title: '혁신', desc: '최신 기술 트렌드를 빠르게 도입하는 능동적 자세' },
]

export default function About() {
  return (
    <main className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <p className="section-tag">ABOUT US</p>
          <h1 className="section-title">회사 소개</h1>
          <p className="page-header-desc">
            2003년부터 지금까지, 신뢰로 쌓아온 IT 전문 기업
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview-section">
        <div className="container overview-inner">
          <div className="overview-text">
            <p className="section-tag">COMPANY</p>
            <h2 className="section-title">YJ IT Solutions</h2>
            <p>
              YJ IT Solutions는 2003년 9월 23일에 설립된 IT 전문 기업입니다.
              컴퓨터 판매를 시작으로, 기업용 프로그램 개발과 웹 개발 분야로 사업을 확장하여
              현재는 종합 IT 서비스 기업으로 성장했습니다.
            </p>
            <p style={{ marginTop: '1rem' }}>
              우리는 단순한 IT 업체가 아닌, 고객의 비즈니스를 함께 성장시키는 파트너입니다.
              500곳 이상의 기업 고객이 우리를 신뢰하는 이유는 20년간 변함없이 지켜온
              품질과 서비스에 있습니다.
            </p>
          </div>
          <div className="overview-info">
            <div className="info-card">
              <div className="info-row">
                <span className="info-label">설립일</span>
                <span className="info-value">2003년 9월 23일</span>
              </div>
              <div className="info-row">
                <span className="info-label">사업 분야</span>
                <span className="info-value">컴퓨터 판매 / 프로그램 개발 / 웹 개발</span>
              </div>
              <div className="info-row">
                <span className="info-label">고객사</span>
                <span className="info-value">500+ 기업</span>
              </div>
              <div className="info-row">
                <span className="info-label">운영 시간</span>
                <span className="info-value">평일 09:00 ~ 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <p className="section-tag">OUR VALUES</p>
          <h2 className="section-title">핵심 가치</h2>
          <p className="section-subtitle">우리가 일하는 방식의 근본이 되는 가치들입니다</p>
          <div className="values-grid">
            {TEAM_VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="history-section" id="history">
        <div className="container">
          <p className="section-tag">HISTORY</p>
          <h2 className="section-title">연혁</h2>
          <p className="section-subtitle">2003년부터 이어온 성장의 발자취</p>
          <div className="timeline">
            {HISTORY.map(({ year, event }, i) => (
              <div key={year} className={`timeline-item${i % 2 === 0 ? '' : ' right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{year}</span>
                  <p>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
