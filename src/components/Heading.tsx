import styled from 'styled-components';

const Heading = styled.h1<{ active: boolean}>`
  color: ${props => (props.active ? 'red' : 'blue')}
`

export default Heading;

