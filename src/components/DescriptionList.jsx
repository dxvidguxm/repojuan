import React from 'react';

const DescriptionList = ({ title, description, items }) => {
    return (
        <div className="rounded-3xl border border-white/5 bg-surface-card/50 backdrop-blur-md overflow-hidden">
            <div className="px-6 py-6 border-b border-white/5">
                <h3 className="text-lg font-orbitron font-semibold text-white">{title}</h3>
                {description && <p className="mt-1 max-w-2xl text-sm text-content-secondary">{description}</p>}
            </div>
            <div className="border-t border-white/0">
                <dl className="divide-y divide-white/5">
                    {items.map((item, index) => (
                        <div key={index} className="px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-white/[0.02] transition-colors">
                            <dt className="text-sm font-medium text-brand-glow">{item.label}</dt>
                            <dd className="mt-1 text-sm text-content-secondary sm:col-span-2 sm:mt-0 leading-relaxed">
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
