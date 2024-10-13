import { PLACEHOLDER } from '../../constants/index.js';
import s from './FriendsItem.module.scss';

const FriendsItem = ({ item }) => {
  const workDays = item.workDays?.[0]?.from
    ? `${item.workDays[0]?.from} - ${item.workDays[0]?.to}`
    : PLACEHOLDER.WORK_DAYS;

  return (
    <div className={s.item}>
      <div className={s.workDays}>{workDays}</div>
      <img className={s.img} src={item.imageUrl} alt="Logo" width="80" height="80" />
      <div className={s.infoWrapper}>
        <h3 className={s.title}>{item.title}</h3>
        <address className={s.address}>
          <ul className={s.list}>
            <li className={s.addressItem}>
              <p className={s.addressText}>Email:&nbsp;</p>
              {item.email ? (
                <a className={s.link} href={`mailto:${item.email}`}>
                  {item.email}
                </a>
              ) : (
                <span className={s.span}>{PLACEHOLDER.ADDRESS}</span>
              )}
            </li>
            <li className={s.addressItem}>
              <p className={s.addressText}>Address:&nbsp;</p>
              {item.address ? (
                <a
                  className={s.link}
                  href={item.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.address}
                </a>
              ) : (
                <span className={s.span}>{PLACEHOLDER.ADDRESS}</span>
              )}
            </li>
            <li className={s.addressItem}>
              <p className={s.addressText}>Phone:&nbsp;</p>
              {item.phone ? (
                <a className={s.link} href={`tel:${item.phone}`}>
                  {item.phone}
                </a>
              ) : (
                <span className={s.span}>{PLACEHOLDER.ADDRESS}</span>
              )}
            </li>
          </ul>
        </address>
      </div>
    </div>
  );
};

export default FriendsItem;
