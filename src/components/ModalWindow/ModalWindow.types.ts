export interface ModalWindowProps {
  head: string
  post?: string
  text: string
  photo: string
  isOpenOut: boolean
  onClose: () => void
  overlay: JSX.Element
}
