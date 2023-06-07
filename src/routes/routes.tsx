import { AboutClinic } from '../components/AboutClinic/AboutClinic'
import { AboutDonors } from '../components/AboutDonors/AboutDonors'
import { Contacts } from '../components/Contacts/Contacts'
import { ForApplication } from '../components/ForApplicattion/ForApplication'
import { ForRecipients } from '../components/ForRecipients/ForRecipients'
import { MainPage } from '../components/MainPage/MainPage'
import { RoutesTypes } from '../models/RoutesType.types'

export enum RouteNames {
  MAIN = '/',
  CLINIC = '/clinic',
  DONORS = '/donors',
  FOR_DONORS = '/for_donors',
  FOR_RECIPIENTS = '/for_recipients',
  CONTACTS = '/contacts',
}

export const routes: RoutesTypes[] = [
  { id: 1, path: RouteNames.MAIN, element: <MainPage /> },
  { id: 2, path: RouteNames.CLINIC, element: <AboutClinic /> },
  { id: 3, path: RouteNames.DONORS, element: <AboutDonors /> },
  { id: 4, path: RouteNames.FOR_DONORS, element: <ForApplication /> },
  { id: 5, path: RouteNames.FOR_RECIPIENTS, element: <ForRecipients /> },
  { id: 6, path: RouteNames.CONTACTS, element: <Contacts /> },
]
