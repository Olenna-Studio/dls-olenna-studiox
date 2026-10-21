import React from 'react';

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const VisuallyHidden = React.forwardRef<HTMLElement, VisuallyHiddenProps>(({
  children,
  as: Component = 'span',
  style,
  ...props
}, ref) => {
  const hiddenStyle: React.CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
    ...style
  };

  return (
    <Component ref={ref} style={hiddenStyle} {...props}>
      {children}
    </Component>
  );
});

VisuallyHidden.displayName = 'VisuallyHidden';
