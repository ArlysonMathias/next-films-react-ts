import * as S from './styles';


const Slider = (props:any) => {
  return (
    <S.SliderContainer>
      {props.children}
    </S.SliderContainer>
  );
}

export default Slider;