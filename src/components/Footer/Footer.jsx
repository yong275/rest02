import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">YJ</span>
              <span>IT Solutions</span>
            </div>
            <p>2003년부터 함께한 신뢰의 IT 파트너.<br />컴퓨터 판매부터 소프트웨어 개발까지</p>
          </div>

          <div className="footer-col">
            <h4>서비스</h4>
            <ul>
              <li><Link to="/services#computer">컴퓨터 판매</Link></li>
              <li><Link to="/services#program">프로그램 개발</Link></li>
              <li><Link to="/services#web">웹 개발</Link></li>
              <li><Link to="/services#support">유지보수</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>회사</h4>
            <ul>
              <li><Link to="/about">회사소개</Link></li>
              <li><Link to="/about#history">연혁</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>연락처</h4>
            <ul>
              <li>대표: 000-0000-0000</li>
              <li>이메일: info@yjit.co.kr</li>
              <li>운영시간: 평일 09:00 ~ 18:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2003 – {new Date().getFullYear()} YJ IT Solutions. All rights reserved.</p>
          <p className="footer-since">Since 2003.09.23</p>
        </div>
      </div>
    </footer>
  )
}
