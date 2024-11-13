/*
  Using <keyof> to create new types based on <Object.keys>



*/

const medicineObject = {
  name: 'Aspirin',
  dosage: 500,
  manufacturer: 'ExamplePharma',
}

type MedicineKeys = keyof typeof medicineObject

// We want to create a new type <ExtendedMedicineType> that includes an additional description property for each key in <medicineObject>:
type ExtendedMedicineType = {
  [K in MedicineKeys]: {
    value: (typeof medicineObject)[K]
    description: string
  }
}

// With the help of <keyof> <typeof>, we create a new type: <MedicineKeys>. Then, we derive an <ExtendedMedicineType> based on the <MedicineKeys>, which ensures that each property has a specific structure (value and description). The newly added description property serves as documentation for each property.
