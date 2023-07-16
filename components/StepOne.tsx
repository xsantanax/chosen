import EmailInput from '@/components/EmailInput'

export default function StepOne({ setStep }: any) {
  return (
    <>
      <div>Type in the email of your chosen one.</div>
      <EmailInput placeholder='His/her email' action={() => setStep(2)} />
    </>
  )
}
