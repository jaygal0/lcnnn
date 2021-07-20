import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import AudioBar from './AudioBar'
import data from '../data/episodeList'

const Nav = styled.nav`
  grid-column: 2 / span 10;
  height: min-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
    margin-left: ${({ theme }) => theme.margin.medium};
    margin-right: ${({ theme }) => theme.margin.medium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-column: 1 / -1;
    margin-left: 0;
    margin-right: 0;
  }
`
const LogoWrapper = styled.div`
  position: relative;
  width: 216px;
  height: 72px;

  &:hover {
    cursor: pointer;
  }
`
const LinksWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    opacity: 0.98;
    background: ${({ theme }) => theme.color.pink};
    position: absolute;
    top: 0;
    right: 0;
    width: min-content;
    padding: 3.2rem 1.6rem;
    z-index: 10;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &.hideMenu {
      transition: ${({ theme }) => theme.transition.fast};
      top: -400%;
    }
    &.showMenu {
      transition: ${({ theme }) => theme.transition.fast};
      top: 0;
      right: 0;
    }
  }
`
const UnorderedList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    flex-direction: column;
    justify-content: center;
  }
`
const CTA = styled.li`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.color.hotPink};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
    transition: ${({ theme }) => theme.transition.fast};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    width: 100%;
    text-align: center;
    margin-top: ${({ theme }) => theme.margin.medium};
  }
`
// AUDIO WRAPPER STYLING

const AudioWrapper = styled.div`
  width: 80vw;
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: min-content;
  background-color: ${({ theme }) => theme.color.pink};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 3.2rem;
  align-items: center;
  margin: 0 auto;
  z-index: 1;

  &.show-modal {
    opacity: 1;
    transition: ${({ theme }) => theme.transition.medium};
  }

  &.hide-modal {
    opacity: 0;
    bottom: -50%;
    transition: ${({ theme }) => theme.transition.medium};
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-right: ${({ theme }) => theme.margin.medium};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: none;
  }
`
const ContentWrapper = styled.div`
  width: 100%;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.h3`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const CloseWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const Position = styled.p`
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.small};
  margin-left: ${({ theme }) => theme.margin.small};
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: none;
  }
`
const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: block;
    position: absolute;
    height: 24px;
    width: 24px;
    top: 1.6rem;
    right: 0;
  }
`
const CloseModalWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.8rem;
  }
`
const Date = styled.p`
  font: ${({ theme }) => theme.font.meta};
  margin-top: -0.8rem;
`

const Navbar = () => {
  // To open podcast modal
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal)
  // To open and close phone menu
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <Nav>
      <Link href="/" passHref>
        <LogoWrapper>
          <Image src="/lcnnn-logo.svg" layout="fill" objectFit="cover" />
        </LogoWrapper>
      </Link>
      <LinksWrapper className={sidebar ? 'hideMenu' : 'showMenu'}>
        <CloseModalWrapper>
          <Image
            src="/close-icon.svg"
            width={24}
            height={24}
            alt="close button"
            onClick={showSidebar}
          />
        </CloseModalWrapper>
        <UnorderedList>
          <Link href="/episodes" passHref>
            <li
              className={`${
                router.pathname == '/episodes' ? 'active' : ''
              } nav`}
            >
              episodes
            </li>
          </Link>
          <CTA className="nav" onClick={modal == false ? showModal : null}>
            listen now
          </CTA>
        </UnorderedList>
      </LinksWrapper>
      {/* HAMBURGER MENU */}
      <Hamburger>
        <Image
          src="/hamburger.svg"
          layout="fill"
          objectFit="cover"
          onClick={showSidebar}
        />
      </Hamburger>
      {/* AUDIO MODAL PLAYER */}
      <AudioWrapper className={modal ? 'show-modal' : 'hide-modal'}>
        <ImageWrapper>
          <Image
            src={data[0].src}
            layout="fill"
            objectFit="cover"
            alt={`${data[0].firstName} ${data[0].surname}`}
          />
        </ImageWrapper>
        <ContentWrapper>
          <CloseWrapper>
            <TextWrapper>
              <Link href={`/${data[0].url}`} onClick={showModal} passHref>
                <Title>{`#${data[0].id} ${data[0].firstName} ${data[0].surname}`}</Title>
              </Link>
              <Position>{data[0].profession}</Position>
            </TextWrapper>
            <Image
              src="/close-icon.svg"
              width={24}
              height={24}
              onClick={showModal}
              className="hover-image"
              alt="close button"
            />
            {/* FIXME: Figure out the auto stop when closing the modal */}
          </CloseWrapper>
          <Date>{data[0].uploadDate}</Date>
          <AudioBar modal audio={data[0].audio} />
        </ContentWrapper>
      </AudioWrapper>
    </Nav>
  )
}

export default Navbar
