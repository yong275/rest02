import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="container">
          <p className="section-tag">CONTACT</p>
          <h1 className="section-title">문의하기</h1>
          <p className="page-header-desc">
            궁금한 점이나 프로젝트 상담을 남겨주세요. 빠르게 연락드리겠습니다.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-inner">
          <div className="contact-info">
            <h2>연락처 정보</h2>
            <div className="info-items">
              <div className="info-item">
                <div className="info-item-icon">📞</div>
                <div>
                  <strong>전화</strong>
                  <p>000-0000-0000</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-item-icon">✉️</div>
                <div>
                  <strong>이메일</strong>
                  <p>info@yjit.co.kr</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-item-icon">🕐</div>
                <div>
                  <strong>운영시간</strong>
                  <p>평일 09:00 ~ 18:00</p>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem' }}>주말 / 공휴일 휴무</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-item-icon">📍</div>
                <div>
                  <strong>주소</strong>
                  <p>주소를 입력해주세요</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 연락드리겠습니다.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">이름 *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="홍길동" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">회사명</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="(주)회사명" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">이메일 *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="example@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">연락처</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="010-0000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">문의 서비스</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">서비스를 선택해주세요</option>
                    <option value="computer">컴퓨터 판매</option>
                    <option value="program">프로그램 개발</option>
                    <option value="web">웹 개발</option>
                    <option value="support">IT 유지보수</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">문의 내용 *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="문의하실 내용을 자세히 적어주세요." />
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
