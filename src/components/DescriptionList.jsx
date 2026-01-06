import React from 'react';

const DescriptionList = ({ title, description, items }) => {
    return (
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md overflow-hidden transition-colors duration-300">
            <div className="px-6 py-6 border-b border-[var(--border-color)]">
                <h3 className="text-lg font-orbitron font-semibold text-[var(--text-primary)]">{title}</h3>
                {description && <p className="mt-1 max-w-2xl text-sm text-[var(--text-secondary)]">{description}</p>}
            </div>
            <div className="border-t border-white/0">
                <dl className="divide-y divide-[var(--border-color)]">
                    {items.map((item, index) => (
                        <div key={index} className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-[var(--text-primary)]/5 transition-colors">
                            <dt className="text-sm font-medium text-brand-primary">{item.label}</dt>
                            <dd className="mt-1 text-sm text-[var(--text-secondary)] sm:col-span-2 sm:mt-0 leading-relaxed">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default DescriptionList;
