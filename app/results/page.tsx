import Link from 'next/link'
import styles from './page.module.css'

export default function Results() {
  const myUsers: any = []
  return (
    <div className={styles.container}>
      <div className={styles.title}>Results</div>
      <div className='col gap-4 my-16 w-full items-center'>
        {myUsers
          .sort((a: any, b: any) => b.allVoters.length - a.allVoters.length)
          .map((user: any) => (
            <div
              key={user.id}
              className='flex w-full max-w-[560px] cursor-pointer px-6 py-[10px] bg-[#282838] rounded flex-wrap'
              // onClick={() => {
              //   setCurrentUser(user)
              //   openModal()
              // }}
            >
              <div>{user.id}</div>
              <div className='flex-1' />
              <div className='col'>
                <div>Total Votes: {user.allVoters.length}</div>
                {/* <div>
                  {user.allVoters.map((vote, index) => (
                    <div key={index}>{vote}</div>
                  ))}
                </div> */}
              </div>
              {/* <div className='flex-1' /> */}
              {/* <div className='col'>
                <div>Direct Votes: {user.directVoters.length}</div>
                <div>
                  {user.directVoters.map((vote, index) => (
                    <div key={index}>{vote}</div>
                  ))}
                </div>
              </div> */}
            </div>
          ))}
      </div>
      <Link href='/'>Go Back</Link>
    </div>
  )
}
