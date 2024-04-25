import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { IconLockEye } from '../../svgs/IconLockEye';
import { TextFieldM } from './TextField.model';

export const TextField = ({
  className,
  textLabel,
  onBlur,
  type,
  name,
  placeholder,
  id,
  value,
  defaultValue,
  required,
  minLength,
  maxLength,
  inputMode,
  pattern,
  onChange,
  disabled,
  sizeInput,
  onlyNumbers,
  onClickLogin,
}: TextFieldM): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputValue(value ?? defaultValue ?? '');
  }, [value, defaultValue]);

  const onFieldClick = (): void => {
    inputRef.current?.focus();
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onlyNumbers) {
      const numericValue = e.target.value.replace(/[^0-9]/g, '');
      setInputValue(numericValue);
      onChange?.({ ...e, target: { ...e.target, value: numericValue } });
    } else {
      setInputValue(e.target.value);
      onChange?.(e);
    }
  };

  const handlePasswordIcon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const input = inputRef.current;
    if (input) {
      if (input.type === 'password') {
        input.type = 'text';
      } else {
        input.type = 'password';
      }
    }
  };

  const handleLoginClick = (): void => {
    // Validar el campo de correo electrónico
    if (name === 'email' && !isValidEmail(inputValue)) {
      setError('El correo electrónico no es válido');
      return;
    }

    // Llamar a la función onClickLogin si está definida
    onClickLogin?.();
  };

  const isValidEmail = (email: string): boolean => {
    // Simple validación de correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const clearError = (): void => {
    setError(null);
  };

  return (
    <div className="relative">
      <div
        className={`${className ?? ''} ${
          value ? 'fixed-value' : ''
        } ${disabled ? 'disabled' : ''}`}
        onClick={onFieldClick}
      >
        <div className="flex flex-col-reverse relative">
          <div className="flex items-center justify-between gap-2">
            <input
              inputMode={inputMode}
              onBlur={onBlur}
              autoComplete="off"
              className="w-full bg-transparent outline-none border-none"
              type={type ?? 'text'}
              id={id}
              name={name}
              placeholder={placeholder}
              required={required}
              minLength={minLength}
              maxLength={maxLength}
              size={sizeInput}
              pattern={pattern}
              onChange={onInputChange}
              disabled={disabled}
              value={value ?? inputValue}
              ref={inputRef}
            />
            {type === 'password' && (
              <div className="rounded-full p-2 cursor-pointer" onClick={handlePasswordIcon}>
                <IconLockEye size={'20'} color="rgb(2, 199, 110)" />
              </div>
            )}
          </div>
          {textLabel && (
            <label className="absolute top-0">
              <span
                className={` ${
                  disabled ? 'disabled' : ''
                } ${value ?? inputValue ? '' : 'center-label'}`}
              >
                {textLabel}
                {required && <span style={{ color: 'red' }}>*</span>}
              </span>
              <span className="invisible">.</span>
            </label>
          )}
        </div>
      </div>
      {error && (
        <div className="absolute top-full left-0 w-full bg-red-200 p-2 text-red-700 z-10">
          {error}
          <button className="ml-2 text-sm text-red-700" onClick={clearError}>
            Cerrar
          </button>
        </div>
      )}
      <button onClick={handleLoginClick}>Iniciar sesión</button> {/* Botón de inicio de sesión */}
    </div>
  );
};
