import { Icon } from "../icon";
import { Typography } from "../typography";
import { Container, InputContainer, LabelBar, StyledInput } from "./styled";
import { Props } from "./types";

export const Input = ({
  inputRef,
  onChange,
  onBlur,
  onFocus,
  defaultValue,
  placeholder,
  isDisabled = false,
  label,
  shortDescription,
  caption,
  hasError = false,
  type,
  iconColor,
  rightIcon,
}: Props) => (
  <Container>
    <LabelBar>
      {label && (
        <Typography
          specs={{ variant: "p2", type: "bold" }}
          color={
            (isDisabled && "primaryDisable") ||
            (hasError && "dangerTint01") ||
            "primary04"
          }
        >
          {label}
        </Typography>
      )}
      {caption && (
        <Typography
          specs={{ variant: "p3", type: "bold" }}
          color={(isDisabled && "primaryDisable") || "primary04"}
        >
          {caption}
        </Typography>
      )}
    </LabelBar>
    <InputContainer isDisabled={isDisabled} hasError={hasError}>
      <StyledInput
        placeholder={placeholder}
        ref={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        defaultValue={defaultValue}
        disabled={isDisabled}
        isDisabled={isDisabled}
        hasError={hasError}
        type={type}
      />
      {rightIcon && <Icon name={rightIcon} color={iconColor} />}
    </InputContainer>
    {shortDescription && (
      <Typography
        specs={{ variant: "p2", type: "regular" }}
        color={
          (isDisabled && "primaryDisable") ||
          (hasError && "dangerTint01") ||
          "primary04"
        }
      >
        {shortDescription}
      </Typography>
    )}
  </Container>
);
