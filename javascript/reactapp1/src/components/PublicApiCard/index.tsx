interface IProps {
    title?: string;
    description?: string;
    externalLink?: string;
}

function PublicApiCard({
    title,
    description,
    externalLink
}: IProps) {

    if (!title) return null;

    return (
        <div role='listitem' style={{borderTop:'1px solid #eee', padding:'5px 0px'}}>
            <h3 style={{margin:'0px'}}>{title}</h3>
            <div role='complementary'>{description}</div>
            {externalLink && <div><a href={externalLink} target='_blank' rel='noreferrer'>{externalLink}</a></div>}
        </div>
    )
}

export { PublicApiCard }
