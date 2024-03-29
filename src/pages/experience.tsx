import Head from '../components/head'
import Nav from '../components/common/Nav'
import styled from 'styled-components'
import TextField from '../components/common/TextField'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #21cbf3 30%, #2196f3 90%);
  font-size: 5em;
  color: white;
`

export default () => (
  <div>
    <Head title="Experience" />
    {/* <Nav /> */}
    <Container>
      {/* <div>Experience</div> */}
      <div>
        <TextField></TextField>
      </div>
    </Container>
  </div>
)
