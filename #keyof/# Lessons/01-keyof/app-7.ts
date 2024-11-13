/*
  Using <keyof> to create new types based on <Object.keys>



*/

const medicineObject = {
  name: 'Aspirin',
  dosage: 500,
  manufacturer: 'ExamplePharma',
}

type MedicineKeys = keyof typeof medicineObject

type ExtendedMedicineType = {
  [K in MedicineKeys]: {
    value: (typeof medicineObject)[K]
    description: string
  }
}

// We can use the new ExtendedMedicineType as shown below:
const myMedicine: ExtendedMedicineType = {
  name: {
    value: 'Aspirin',
    description: 'Name of the medicine',
  },
  dosage: {
    value: 500,
    description: 'Dosage of the medicine in milligrams',
  },
  manufacturer: {
    value: 'ExamplePharma',
    description: 'Manufacturer of the medicine',
  },
}
