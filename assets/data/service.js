import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import ReceiptIcon from '@material-ui/icons/Receipt';
const services = [
  {
    id: 1,
    title: 'INVOICING',
    icon: <AccountBalanceIcon color='secondary' />
  },
  {
    id: 2,
    title: 'PAYMENT GATEWAY',
    icon: <PaymentIcon color='secondary' />
  },
  {
    id: 3,
    title: 'CUSTOMER RECORDS',
    icon: <ReceiptIcon color='secondary' />
  },
  {
    id: 4,
    title: 'CLOUD SYNC',
    icon: <CloudDoneIcon color='secondary' />
  },
]

export default services