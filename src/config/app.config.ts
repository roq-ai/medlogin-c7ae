interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Doctor'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Staff Member', 'Doctor', 'Nurse'],
  tenantName: 'Company',
  applicationName: 'MedLogin',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage own profile in user table',
    'Manage own records in doctor table',
    'View appointment details in appointment table',
    'Edit appointment details in appointment table',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c7a15258-c9e3-48cf-b3a7-eb230cb3df07',
};
