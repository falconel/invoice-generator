
// const logo = require('../assets/logo.png');
import logo from '../logo.jpg'
import type { Invoice, ProductLine } from '../types';

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
  days: ''
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const current_date = new Date();

const dueDate = new Date(current_date.getTime());
dueDate.setTime(dueDate.getTime() + (20 * 24 * 60 * 60 * 1000));

const getFirstAndLastDates = (year: number, monthName: string) => {
  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
  const startDate = new Date(year, monthIndex, 1);
  const endDate = new Date(year, monthIndex + 1, 0);

  return {
    startDate,
    endDate
  };
}

const getWeekdaysBetweenDates = (startDate: Date, endDate: Date) => {
  const weekdays = [];

  // Set the start date to the beginning of the day
  startDate.setHours(0, 0, 0, 0);

  // Loop through each day between the start and end dates
  while (startDate <= endDate) {
    // Check if the current day is a weekday (Monday to Friday)
    if (startDate.getDay() >= 1 && startDate.getDay() <= 5) {
      weekdays.push({'date': new Date(startDate), 'count': 4}); // Add the current weekday to the list
    }

    // Move to the next day
    startDate.setDate(startDate.getDate() + 1);
  }

  return weekdays;
}

const startAndEndDates = getFirstAndLastDates(2023, "May")
export const weekdaysList = getWeekdaysBetweenDates(new Date("2023-05-17"), startAndEndDates.endDate);

export const initialInvoice: Invoice = {
  logo: logo,
  logoWidth: 100,
  title: 'INVOICE',
  companyName: 'Falconel Technologies LLP',
  name: 'Flat A-206, Spring Views Elegance',
  companyAddress: 'Camelot Layout, Kondapur',
  companyAddress2: 'Hyderabad, TS 500084',
  companyCountry: 'India',
  billTo: 'Bill To:',
  clientName: 'Condor Software Inc.',
  clientAddress: '401 W A Street, Suite 200',
  clientAddress2: 'San Diego, CA 92101',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: `${current_date}`,
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: `${dueDate}`,
  productLineDescription: 'Item Description',
  productLineDays: 'Days',
  productLineQuantity: 'Qty/Day',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: `Working days for ${monthNames[current_date.getMonth()]} ${current_date.getFullYear()}`,
      days: "10",
      quantity: '4',
      rate: '40.00',
    },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'GST (0%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'It was great doing business with you.',
  notes: '',
  termLabel: 'Payment Details',
  term: 'Account Name     : FALCONEL TECHNOLOGIES LLP\nAccount Number  : 437405000591\nIFSC Code             : ICIC0004374\nSWIFT Code         : ICICINBBNRI',
}
