const business = {
  opens: '10am',
  closes: '7pm',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'TH'],
  employees: {
    Omid: { position: 'CEO', daysOfWeekWorking: ['M', 'T', 'W', 'TH'] },
    Shawn: { position: 'CTO', daysOfWeekWorking: ['M', 'T', 'W', 'TH'] },
    Tiffany: {
      position: 'operations',
      daysOfWeekWorking: ['M', 'T', 'W', 'TH'],
    },
    Eric: { position: 'manager', daysOfWeekWorking: ['M', 'T', 'W', 'TH'] },
  },
};

function addWeekends() {
  business.daysOpen = [...business.daysOpen, 'S', 'SU'];
  business.employees.Omid.daysOfWeekWorking.push('S', 'SU');
  business.employees.Tiffany.daysOfWeekWorking.push('S', 'SU');
  business.employees.Eric.daysOfWeekWorking.push('S', 'SU');
  business.employees.Shawn.daysOfWeekWorking.push('S', 'SU');
}

addWeekends();
