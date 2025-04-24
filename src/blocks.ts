import type { Editor, BlockProperties } from 'grapesjs';
import { PluginOptions } from '.';

export default function(editor: Editor, opts: Required<PluginOptions>) {
  const bm = editor.Blocks;
  let tableStyleStr = '';
  let cellStyleStr = '';
  let tableStyle = opts.tableStyle || {};
  let cellStyle = opts.cellStyle || {};

  const addBlock = (id: string, blockDef: BlockProperties) => {
    opts.blocks.indexOf(id)! >= 0 && editor.Blocks.add(id, {
      select: true,
      ...blockDef,
      ...opts.block(id),
    });
  }

  for (let prop in tableStyle){
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle){
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }

  addBlock('sect100', {
    label: '1 Section',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}" align="center" valign="top"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect50', {
    label: '1/2 Section',
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}" width="50%" align="center" valign="top"></td>
          <td style="${cellStyleStr}" width="50%" align="center" valign="top"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect30', {
    label: '1/3 Section',
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}" width="33.3333%" align="center" valign="top"></td>
          <td style="${cellStyleStr}" width="33.3333%" align="center" valign="top"></td>
          <td style="${cellStyleStr}" width="33.3333%" align="center" valign="top"></td>
        </tr>
      </table>
    `,
  });

  addBlock('sect37', {
    label: '3/7 Section',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}" width="30%" align="center" valign="top"></td>
          <td style="${cellStyleStr}" width="70%" align="center" valign="top"></td>
        </tr>
      </table>
    `,
  });

  addBlock('button', {
    label: 'Button',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td align="center" bgcolor="#3b97e3" style="padding: 12px 18px; border-radius: 4px;">
            <a href="#" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; display: inline-block;">Button</a>
          </td>
        </tr>
      </table>
    `,
  });

  addBlock('divider', {
    label: 'Divider',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td height="1" bgcolor="#E0E0E0" style="font-size: 0; line-height: 0;">&nbsp;</td>
        </tr>
      </table>
    `,
  });

  addBlock('text', {
    label: 'Text',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
    activate: true,
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: { padding: '10px', 'font-family': 'Arial, Helvetica, sans-serif' },
    },
  });

  addBlock('text-sect', {
    label: 'Text Section',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 10px; font-family: Arial, Helvetica, sans-serif;">
            <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Insert title here</h1>
            <p style="font-size: 14px; line-height: 1.5; margin: 0;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </td>
        </tr>
      </table>
    `,
  });

  addBlock('image', {
    label: 'Image',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
    activate: true,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td align="center">
            <img src="https://via.placeholder.com/600x400" alt="Image" width="100%" style="display: block; max-width: 100%; height: auto;" />
          </td>
        </tr>
      </table>
    `,
  });

  addBlock('quote', {
    label: 'Quote',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 10px 20px; border-left: 4px solid #ccc; font-family: Arial, Helvetica, sans-serif; font-style: italic; color: #666666;">
            <p style="font-size: 16px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>
          </td>
        </tr>
      </table>
    `,
  });

  addBlock('link', {
    label: 'Link',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
    content: `
      <a href="#" target="_blank" style="color: #3b97e3; text-decoration: underline; font-family: Arial, Helvetica, sans-serif;">Link</a>
    `,
  });

  addBlock('link-block', {
    label: 'Link Block',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td style="padding: 5px; border: 1px solid #ccc; min-height: 50px; min-width: 50px;">
            <a href="#" target="_blank" style="color: #3b97e3; text-decoration: none; display: block; min-height: 50px; min-width: 50px;"></a>
          </td>
        </tr>
      </table>
    `,
  });

  const gridItem =
    `<table cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: separate; border: 1px solid #e0e0e0; border-radius: 4px; margin-bottom: 10px;">
      <tr>
        <td style="padding: 0;" align="center">
          <img src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image" width="100%" style="display: block; max-width: 100%; height: auto; border-top-left-radius: 4px; border-top-right-radius: 4px;"/>
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 15px; font-family: Arial, Helvetica, sans-serif;">
                <h1 style="font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 10px;">Title here</h1>
                <p style="font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;

  addBlock('grid-items', {
    label: 'Grid Items',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
    </svg>`,
    content: `
      <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td width="50%" style="padding-right: 5px;" valign="top">${gridItem}</td>
          <td width="50%" style="padding-left: 5px;" valign="top">${gridItem}</td>
        </tr>
      </table>
    `,
  });

  const listItem =
    `<table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 10px;">
      <tr>
        <td style="padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px;">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td width="30%" style="padding-right: 15px;" valign="top">
                <img src="https://via.placeholder.com/150/78c5d6/fff" alt="Image" width="100%" style="display: block; max-width: 100%; height: auto; border-radius: 4px;"/>
              </td>
              <td width="70%" style="font-family: Arial, Helvetica, sans-serif;" valign="top">
                <h1 style="font-size: 18px; font-weight: bold; margin-top: 0; margin-bottom: 10px;">Title here</h1>
                <p style="font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;

  addBlock('list-items', {
    label: 'List Items',
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>
    </svg>`,
    content: listItem + listItem,
  });
};
