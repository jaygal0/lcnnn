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
`
const LogoWrapper = styled.div`
  width: 96px;
  height: 96px;
  background: ${({ theme }) => theme.color.hotPink};

  &:hover {
    cursor: pointer;
  }
`
const LinksWrapper = styled.div``
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
`

const Navbar = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal)
  return (
    <Nav>
      <Link href="/" passHref>
        <LogoWrapper></LogoWrapper>
      </Link>
      <LinksWrapper>
        <ul>
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
        </ul>
      </LinksWrapper>
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
          <AudioBar modal audio={data[0].audio} />
        </ContentWrapper>
      </AudioWrapper>
    </Nav>
  )
}

export default Navbar
