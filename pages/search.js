/* eslint-disable @next/next/link-passhref */
import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

 const [ pickup, setPickup ] = useState("");
 const [ dropoff, setDropoff ] = useState("");

 console.log(pickup)
 console.log(dropoff)

 return (
  <Wrapper>
   <Link href = '/'>
    <ButtonContainer>
     <BackButton src='https://cdn-icons.flaticon.com/png/512/2099/premium/2099190.png?token=exp=1649628200~hmac=177a925f9aa9d801e013bfcc5083b027'/>
    </ButtonContainer>
   </Link>
   {/*Button Container */}

   <InputContainer>
    <FromtoIcons>
     <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
     <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
     <Square src='https://img.icons8.com/ios-filled/72/square-spinner.gif' />
    </FromtoIcons>
    <InputBoxes>
     <Input 
      placeholder='Where should we pick You?' 
      value={pickup}
      onChange={(e) => setPickup(e.target.value)}
     />
     <Input 
      placeholder='Where are you going?'
      value={dropoff}
      onChange={(e) => setDropoff(e.target.value)}
     />
    </InputBoxes>
    <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />

   </InputContainer>
   {/*Input Container */}

   <SavedPlaces>
    <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
    Recent Places
   </SavedPlaces>
   {/*Saved places*/}

   <Link href={{
    pathname: '/confirm',
    query: {
     pickup: pickup,
     dropoff: dropoff
    }
   }} >
    <FromLocations>
     Get Going  
    </FromLocations>
   </Link>
   {/*Confirm Location*/}
  </Wrapper>
 )
}

export default Search

const Wrapper = tw.div `
bg-blue-100 h-screen
`
const ButtonContainer = tw.div `
bg-white px-4
`
const BackButton = tw.img `
h-12 pb-5 pt-2 cursor-pointer
`

const FromtoIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const Circle = tw.img`
h-3
`
const Line = tw.img`
h-10
`

const Square = tw.img `
h-3
`
const InputBoxes = tw.div `
flex flex-col flex-1
`
const Input = tw.input `
h-10 bg-blue-100 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img `
w-10 h-10 bg-blue-100 rounded-full ml-3 
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img `
bg-blue-200 w-10 h-10 p-2 rounded-full mr-2
`
const FromLocations = tw.div `
bg-blue-200 font-bold text-center mt-2 text-xl p-4 w-full rounded-full cursor-pointer
`