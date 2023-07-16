export default function StepTwo({ setStep }: any) {
  return (
    <>
      <div>
        You successfully voted in{' '}
        <u>
          {'Rafael'}
          {/* {theirEmail} */}
        </u>
      </div>
      <div onClick={() => setStep(1)}>Go back</div>
    </>
  )
}
