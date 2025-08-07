import React, {JSX} from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';

interface TextProps {
    title?: string;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    description?: string;
    bullets?: string[];
    descriptionWithBullets?: string[];
    numberedBullets?: { title: string; description: string }[];
    centerTitle?: boolean;
    centerDescription?: boolean;
    centerBullets?: boolean;
}

const Text: React.FC<TextProps> = ({
                                       title,
                                       titleLevel = 2,
                                       description,
                                       bullets,
                                       descriptionWithBullets,
                                       numberedBullets,
                                       centerTitle = false,
                                       centerDescription = false,
                                       centerBullets = false
                                   }) => {
    const headingTag = `h${titleLevel}` as keyof JSX.IntrinsicElements;

    return (
        <div className={styles.textBlock}>
            {title &&
                React.createElement(
                    headingTag,
                    {
                        className: clsx(styles.title, centerTitle && styles.center)
                    },
                    title
                )}

            {description && (
                <p className={clsx(styles.description, centerDescription && styles.center)}>
                    {description}
                </p>
            )}

            {Array.isArray(bullets) && bullets.length > 0 && (
                <ul className={clsx(styles.bulletList, centerBullets && styles.center)}>
                    {bullets.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}

            {Array.isArray(descriptionWithBullets) && descriptionWithBullets.length > 0 && (
                <div className={styles.descriptionWithBullets}>
                    <p className={clsx(styles.description, centerDescription && styles.center)}>Опис:</p>
                    <ul className={clsx(styles.bulletList, centerBullets && styles.center)}>
                        {descriptionWithBullets.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {Array.isArray(numberedBullets) && numberedBullets.length > 0 && (
                <ol className={clsx(styles.numberedList, centerBullets && styles.center)}>
                    {numberedBullets.map((item, idx) => (
                        <li key={idx}>
                            <strong>{item.title}</strong>
                            <p className={styles.numberedDescription}>{item.description}</p>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default Text;
