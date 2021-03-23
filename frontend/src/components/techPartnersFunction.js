import React, { useState } from 'react'

const techPartnersFunction = ({
  name: nameTech,
  logo: logoTech,
  motto: mottoTech,
  description: descriptionTech,
  link: linkTech,
  show,
}) => {
  const [partnersShow, setPartnersShow] = useState('showNone')
  const [partnerName, setPartnerName] = useState({
    name: '',
    logo: '',
    motto: '',
    description: '',
    link: '#',
  })

  const handleClick = () => {
    if (partnersShow === 'showNone') {
      setPartnersShow({ show })
      setPartnerName({
        ...partnerName,
        name: nameTech,
        logo: logoTech,
        motto: mottoTech,
        description: descriptionTech,
        link: linkTech,
      })
    } else {
      setPartnersShow('showNone')
    }
  }

  return <></>
}

export default techPartnersFunction
