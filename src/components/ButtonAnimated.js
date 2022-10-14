import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../scss/ButtonAnimated.scss';

const ButtonAnimated = (props) => (
  <div className="button-animated">
    <Button animated>
      <Button.Content visible>{props.buttonText}</Button.Content>
      <Button.Content hidden>
        <Icon name={props.iconName} />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonAnimated;
