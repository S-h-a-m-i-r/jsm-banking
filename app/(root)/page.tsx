import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBoxes from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
	const loggedIn = {firstName: 'Shamir', lastName:'Shah', email:'CodeWarriorX@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
				<header className='home-header'>
					<HeaderBox
					  type='greeting'
						title='welcome'
						user={loggedIn.firstName || 'Guest'}
						subtext='access and manage your account and transactions efficiently.'
					/>
					<TotalBalanceBoxes
					    accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1050.11}
					/>
				</header>

				Recent transactions   
      </div>
	  <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:1234.50} , {}]}/>
    </section>
  )
}

export default Home
