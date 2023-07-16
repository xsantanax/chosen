import EmailInput from '@/components/EmailInput'

export default function StepOne({ setStep }: any) {
  return (
    <>
      <div>Think of a close political leader.</div>
      <div>Someone succesful, who you listen to and can talk to with ease.</div>
      <div>Type in the email of your chosen one.</div>
      <EmailInput placeholder='His/her email' action={() => setStep(2)} />
    </>
  )
}
