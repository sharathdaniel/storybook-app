import { Fragment } from 'react';
import {
  Badge,
  Button,
  Checkbox,
  IconButton,
  Radio,
  TextField,
  Textarea,
  Toggle,
} from '../components';
import { Icon } from '../icons/Icon';
import './ComponentsDemo.scss';

const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
const SIZES = [
  ['sm', 'Small'],
  ['md', 'Medium'],
  ['lg', 'Large'],
  ['xl', 'Extra Large'],
] as const;
const ICON_SIZES = ['xs', 'sm', 'md', 'lg'] as const;
const BADGE_VARIANTS = ['neutral', 'success', 'error', 'warning', 'info'] as const;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function ComponentsDemo() {
  return (
    <div className="app-c-demo-page">
      <div className="app-c-page-scroll u-scrollbar">
        <h1 className="u-mb-2">Components</h1>
        <p className="u-mb-4">
          A minimal set of reference primitives built on the StyleBase token system. Fork them,
          extend them, or use them as a blueprint for your own components.
        </p>

        <section className="demo-section">
          <h2 className="u-mb-3">Buttons</h2>

          {VARIANTS.map((variant) => (
            <Fragment key={variant}>
              <h3 className="u-mb-2">{capitalize(variant)}</h3>
              <div className="demo-row">
                {SIZES.map(([size, label]) => (
                  <Button key={size} variant={variant} size={size}>
                    {label}
                  </Button>
                ))}
                <Button variant={variant} disabled>
                  Disabled
                </Button>
              </div>
            </Fragment>
          ))}

          <h3 className="u-mb-2">With Leading Icon</h3>
          <div className="demo-row">
            {SIZES.map(([size, label]) => (
              <Button key={size} variant="primary" size={size}>
                <Icon name="icon-home" className="app-c-icon" />
                {label}
              </Button>
            ))}
            <Button variant="secondary">
              <Icon name="icon-user" className="app-c-icon" />
              Profile
            </Button>
            <Button variant="tertiary">
              <Icon name="icon-home" className="app-c-icon" />
              Home
            </Button>
          </div>

          <h3 className="u-mb-2">With Trailing Icon</h3>
          <div className="demo-row">
            {SIZES.map(([size, label]) => (
              <Button key={size} variant="primary" size={size}>
                {label}
                <Icon name="icon-user" className="app-c-icon" />
              </Button>
            ))}
          </div>

          <h3 className="u-mb-2">Icon Buttons</h3>
          <div className="demo-row">
            {(['primary', 'secondary'] as const).map((variant) =>
              ICON_SIZES.map((size) => (
                <IconButton
                  key={`${variant}-${size}`}
                  variant={variant}
                  size={size}
                  aria-label={`${variant} ${size} icon`}
                >
                  {size.toUpperCase()}
                </IconButton>
              )),
            )}
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Text Fields</h2>

          <h3 className="u-mb-2">Input Sizes</h3>
          <div className="demo-stack">
            {SIZES.map(([size, label]) => (
              <TextField
                key={size}
                size={size}
                placeholder={`${label} input`}
                aria-label={`${label} input`}
              />
            ))}
          </div>

          <h3 className="u-mb-2">States</h3>
          <div className="demo-stack">
            <TextField defaultValue="Default" aria-label="Default input" />
            <TextField error defaultValue="Error state" aria-label="Error input" />
            <TextField readOnly defaultValue="Readonly" aria-label="Readonly input" />
            <TextField disabled defaultValue="Disabled" aria-label="Disabled input" />
          </div>

          <h3 className="u-mb-2">Textarea</h3>
          <div className="demo-stack">
            <Textarea rows={3} placeholder="Write something..." aria-label="Default textarea" />
            <Textarea error rows={3} placeholder="Error textarea..." aria-label="Error textarea" />
            <Textarea
              disabled
              rows={3}
              placeholder="Disabled textarea..."
              aria-label="Disabled textarea"
            />
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Checkboxes</h2>
          <div className="demo-row">
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Checked disabled" defaultChecked disabled />
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Radio Buttons</h2>
          <div className="demo-row">
            <Radio name="demo-radio" value="a" label="Option A" defaultChecked />
            <Radio name="demo-radio" value="b" label="Option B" />
            <Radio name="demo-radio" value="c" label="Option C" />
            <Radio name="demo-disabled" value="d" label="Disabled" disabled />
            <Radio
              name="demo-disabled-checked"
              value="e"
              label="Checked disabled"
              defaultChecked
              disabled
            />
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Toggle Switches</h2>
          <div className="demo-row">
            <Toggle label="Off" />
            <Toggle label="On" defaultChecked />
            <Toggle label="Disabled" disabled />
            <Toggle label="Disabled on" defaultChecked disabled />
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Badges</h2>
          <div className="demo-row">
            {BADGE_VARIANTS.map((variant) => (
              <Badge key={variant} variant={variant}>
                {capitalize(variant)}
              </Badge>
            ))}
          </div>
        </section>

        <section className="demo-section">
          <h2 className="u-mb-3">Groups</h2>

          <h3 className="u-mb-2">Button Group</h3>
          <div className="demo-row">
            {(['sm', 'md'] as const).map((size) => (
              <div key={size} className="app-c-btn-group">
                <Button variant="secondary" size={size}>
                  Left
                </Button>
                <Button variant="secondary" size={size}>
                  Center
                </Button>
                <Button variant="secondary" size={size}>
                  Right
                </Button>
              </div>
            ))}
          </div>

          <h3 className="u-mb-2">Input Group</h3>
          <div className="demo-stack">
            <div className="app-c-input-group">
              <TextField placeholder="First name" aria-label="First name" />
              <TextField placeholder="Last name" aria-label="Last name" />
            </div>
          </div>

          <h3 className="u-mb-2">Mixed (Input + Button)</h3>
          <div className="demo-stack">
            <div className="app-c-input-group">
              <TextField placeholder="Search..." aria-label="Search" />
              <Button variant="primary">Search</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
