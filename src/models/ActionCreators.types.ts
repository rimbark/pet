export interface FetchCommentsType {
  viewStart: number
  viewLimit: number
}

export interface ApplicationType {
  id: number
  patientData: {
    name?: string
    email?: string
    phone?: string
    animalType?: string
    gender?: string
    age?: string
    status?: string
  }
}
