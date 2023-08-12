/**
 * @name Icon interface
 * @description Icon interface for the Icon component and the IconsCatalog enum to work together
 * @property {string} icon - The icon path
 * @property {boolean} isSolid - If the icon is solid or not
 * @property {number} strokeWidth - The stroke width of the icon
 * @property {string} className - The class name of the icon
 * @property {string} fill - The fill color of the icon
 * @property {() => void} onClick - The function to execute when the icon is clicked
 * @example <IconsComponent icon={IconsCatalog.MENU} fill="red" />
 */
interface IconInterface {
	/**
	 * @name icon
	 * @description The icon path
	 * @type {string}
	 * @memberof IconInterface
	 * @example <MENU />
	 */
	icon: string | undefined;
	/**
	 * @name isSolid
	 * @description If the icon is solid or not
	 * @type {boolean}
	 * @memberof IconInterface
	 */
	isSolid?: boolean;
	/**
	 * @name strokeWidth
	 * @description The stroke width of the icon
	 * @type {number}
	 * @memberof IconInterface
	 */
	strokeWidth?: number;
	/**
	 * @name className
	 * @description The class name of the icon
	 * @type {string}
	 * @memberof IconInterface
	 */
	className?: string;
	/**
	 * @name fill
	 * @description The fill color of the icon
	 * @type {string}
	 * @memberof IconInterface
	 */
	fill: string;
	/**
	 * @name onClick
	 * @description The function to execute when the icon is clicked
	 * @type {() => void}
	 * @memberof IconInterface
	 * @example <IconsComponent icon={IconsCatalog.MENU} fill="red" onClick={() => console.log("Hello world")} />
	 */
	onClick?: () => void;
}
