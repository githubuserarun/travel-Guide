import {
  ListItem,
  Image,
  DescriptionContainer,
  NameHeading,
  Description,
} from './style'

const Travelcard = props => {
  const {guideDetails} = props
  const {description, imageUrl, name} = guideDetails

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <DescriptionContainer>
        <NameHeading>{name}</NameHeading>
        <Description>{description}</Description>
      </DescriptionContainer>
    </ListItem>
  )
}

export default Travelcard
