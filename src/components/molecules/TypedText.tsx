import Typography from '@material-ui/core/Typography';
import Typed from 'react-typed';

type Props = {
  typographyProps?: any;
  typedProps?: any;
};

export function TypedText(props: Props) {
  return (
    <Typography {...props?.typographyProps}>
      <Typed {...props?.typedProps} />
    </Typography>
  );
}
