import React from 'react'
import HubspotForm from 'react-hubspot-form'

function Newsletter() {
	return (
		<div className='sp-signup-wrapper'>
			<div className='sp-signup-text'>
				<p>
					<strong>Stay informed about Ethereum and Web3</strong>
					<span>
						Leave your email address below and I'll notify you when I post
						something new about Ethereum, Web3, or crypto.
					</span>
				</p>
			</div>
			<div className='sp-signup-form'>
				<HubspotForm
					portalId='21151635'
					formId='87539f96-e025-4252-bef2-adc5687befb7'
					onSubmit={() => console.log('Newsletter submit!')}
					onReady={form => console.log('Newsletter ready!')}
					loading={<div>Loading...</div>}
				/>
			</div>
		</div>
	)
}

export default Newsletter
