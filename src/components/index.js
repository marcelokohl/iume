export { Page, Container, Field, Grid, Icon, Image, Ellipsis, Card, Tabs, Modal, Wrapper, Spinner, Divider, utils } from 'blackflag'

export {CardCarte} from './CardCarte/index.js'
export {Menu} from './Menu/index.js'
export {EnterPassword} from './EnterPassword'
export {PageFooter} from './PageFooter'
export { Logo } from './Logo'
export { Link } from './Link'
export { LoginPage } from './LoginPage'
export { Button } from './Button'
export { ButtonAction } from './ButtonAction'
export { ButtonList } from './ButtonList'
export { ButtonBack } from './ButtonBack'
export { QRCode } from './QRCode'
export { HomeNav } from './HomeNav'
export { CookieAlert } from './CookieAlert'
export { ProfileMenu } from './ProfileMenu'
export { PrivacyPolicy } from './PrivacyPolicy'
export { Terms } from './Terms'

const decimalToCurrency = v => {
  const f = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return f.format(v)
}
const currencyToDecimal = v => {
  const locale = 'pt-br'
  var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
  var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
  var reversedVal = v.replace(new RegExp('\\' + group, 'g'), '');
  reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
  return Number.isNaN(reversedVal)?0:reversedVal.replace(/[^\d.-]/g, '');
}
const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ok = re.test(String(email).toLowerCase())
  if (ok) {
    return email
  } else {
    return false
  }
}
const gtag = (t, o=null) => {
  if (window.gtag && t && localStorage.getItem('cookies_enabled') === 'true') {
    if (o) {
      window.gtag('event', t, o)
    } else {
      window.gtag('event', t)
    }
  }
}

export {decimalToCurrency}
export {currencyToDecimal}
export {validateEmail}
export {gtag}
